/**
 * Characters / sequences that must never appear in a value that is interpolated
 * directly into a URL path segment. `getUrlForAction` encodes the whole URL with
 * `encodeURI`, which does NOT escape `/ \ . ? #`, so a value such as `../webhooks-vnext`
 * would survive encoding and be normalized by the HTTP transport into a different
 * (sibling) endpoint. We therefore reject such values outright.
 */
const forbiddenSegmentSequences: readonly string[] = ['/', '\\', '..', '?', '#'];

/**
 * Validates a value that will be interpolated into a URL path segment and returns it
 * unchanged when it is safe. Throws when the value is empty/whitespace or contains a
 * path separator or traversal/query sequence that could hijack the request route.
 *
 * @param value Raw value to be placed into the URL path
 * @param segmentName Human-readable name of the segment (used in the error message)
 */
export function assertValidUrlPathSegment(value: string, segmentName: string): string {
    if (typeof value !== 'string' || value.trim().length === 0) {
        throw Error(`Invalid value for '${segmentName}': value must be a non-empty string.`);
    }

    const offending = forbiddenSegmentSequences.find((sequence) => value.indexOf(sequence) !== -1);

    if (offending) {
        throw Error(
            `Invalid value '${value}' for '${segmentName}': path separators and traversal sequences (e.g. '/', '\\', '..', '?', '#') are not allowed.`
        );
    }

    return value;
}
