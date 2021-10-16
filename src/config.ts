import { Options } from "recast";

/**
 * Depending on setup you might want to pass some
 * extra options when calling '.toSource'. By default
 * trailingCommas are not added and depending on
 * if you are running the tests on windows or mac
 * the line endings can differ so we can set it
 * to always be a specific line ending.
 */
export const defaultSourceConfig: Options = {
    trailingComma: true,
    lineTerminator: '\n'
}