module.exports = {
    "preset": "jest-preset-angular",
    "collectCoverage": true,
    "coverageDirectory": "coverage",
    "setupFilesAfterEnv": [
      "<rootDir>/projects/vendor-frontend-ui/src/setup-jest.ts"
    ],
    "reporters": [
      ["jest-summarizing-reporter", {diffs: true}]
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/projects/sandbox/",
      "<rootDir>/dist/",
      "<rootDir>/cypress/",
      "<rootDir>/projects/vendor-frontend-ui/src/test.ts"
    ],
    "moduleNameMapper": {
      "@app/(.*)": "<rootDir>/projects/vendor-frontend-ui/src/app/$1",
      "@assets/(.*)": "<rootDir>/assets/$1",
      "@core/(.*)": "<rootDir>/projects/vendor-frontend-ui/src/app/core/$1",
      "@env": "<rootDir>/projects/vendor-frontend-ui/src/environments/environment",
      "@src/(.*)": "<rootDir>/projects/vendor-frontend-ui/src/src/$1",
      "@state/(.*)": "<rootDir>/projects/vendor-frontend-ui/src/app/state/$1"
    },
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/projects/vendor-frontend-ui/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$",
        "astTransformers": [
          "jest-preset-angular/build/InlineFilesTransformer",
          "jest-preset-angular/build/StripStylesTransformer"
        ]
      }
    }
  }
