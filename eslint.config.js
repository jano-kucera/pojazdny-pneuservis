// @ts-check
import pluginAngular from "@angular-eslint/eslint-plugin";
import pluginJs from "@eslint/js";
import angular from "angular-eslint";
import * as importPlugin from "eslint-plugin-import";
import jestPlugin from "eslint-plugin-jest";
import jsdocPlugin from "eslint-plugin-jsdoc";
import noNullPlugin from "eslint-plugin-no-null";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import rxjsAngularX from "eslint-plugin-rxjs-angular-x";
import rxjsX from "eslint-plugin-rxjs-x";
import sortPlugin from "eslint-plugin-sort";
import sortClassMembers from "eslint-plugin-sort-class-members";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import tseslint, { configs as tseslintConfigs } from "typescript-eslint";

export default tseslint.config(
    {
        ignores: [
            ".angular/",
            ".vscode/",
            "coverage/",
            "dist/",
            "jest/",
            "node_modules/",
            "src/app/common/client-common.ts",
            "src/app/generated/",
            "src/assets/",
        ],
    },
    {
        extends: [
            pluginJs.configs.recommended,
            angular.configs.tsRecommended,
            tseslintConfigs.strictTypeChecked,
            tseslintConfigs.stylisticTypeChecked,
            importPlugin.flatConfigs?.recommended,
            importPlugin.flatConfigs?.typescript,
            rxjsX.configs.recommended,
            jsdocPlugin.configs["flat/recommended-typescript"],
            sortPlugin.configs["flat/recommended"],
            eslintPluginPrettierRecommended,
        ],
        files: ["**/*.{js,ts}"],
        languageOptions: {
            ecmaVersion: "latest",
            globals: globals.browser,
            parserOptions: {
                project: ["./tsconfig.json", "./tsconfig.app.json"],
                sourceType: "module",
            },
            sourceType: "module",
        },
        plugins: {
            "@angular-eslint": pluginAngular,
            "no-null": noNullPlugin,
            "rxjs-angular-x": rxjsAngularX,
            "sort-class-members": sortClassMembers,
            "unused-imports": unusedImports,
        },
        rules: {
            "@angular-eslint/component-selector": [
                "warn",
                {
                    prefix: ["app"],
                    style: "kebab-case",
                    type: "element",
                },
            ],
            "@angular-eslint/directive-selector": [
                "warn",
                {
                    prefix: ["app"],
                    style: "camelCase",
                    type: "attribute",
                },
            ],
            "@angular-eslint/no-duplicates-in-metadata-arrays": "warn",
            "@angular-eslint/no-empty-lifecycle-method": "off",
            "@angular-eslint/pipe-prefix": ["warn", { prefixes: ["app"] }],
            "@angular-eslint/prefer-output-readonly": "warn",
            "@angular-eslint/prefer-signals": [
                "warn",
                {
                    preferInputSignals: false,
                    preferQuerySignals: true,
                    preferReadonlySignalProperties: true,
                },
            ],
            "@angular-eslint/relative-url-prefix": "warn",
            "@angular-eslint/use-pipe-transform-interface": "warn",
            "@typescript-eslint/consistent-type-assertions": [
                "warn",
                {
                    assertionStyle: "as",
                    objectLiteralTypeAssertions: "never",
                },
            ],
            "@typescript-eslint/consistent-type-imports": [
                "warn",
                { prefer: "type-imports" },
            ],
            "@typescript-eslint/explicit-function-return-type": "warn",
            "@typescript-eslint/explicit-member-accessibility": [
                "warn",
                {
                    accessibility: "explicit",
                    overrides: {
                        accessors: "explicit",
                        constructors: "no-public",
                        parameterProperties: "explicit",
                    },
                },
            ],
            "@typescript-eslint/no-deprecated": "warn",
            "@typescript-eslint/no-empty-interface": "off",
            "@typescript-eslint/no-empty-object-type": [
                "error",
                { allowInterfaces: "always" },
            ],
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/no-floating-promises": [
                "warn",
                {
                    ignoreIIFE: true,
                    ignoreVoid: true,
                },
            ],
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-misused-spread": "off",
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
            "@typescript-eslint/no-unnecessary-condition": "off",
            "@typescript-eslint/no-unnecessary-type-parameters": "warn",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-declaration-merging": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/restrict-plus-operands": [
                "warn",
                {
                    allowAny: true,
                    skipCompoundAssignments: false,
                },
            ],
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/typedef": [
                "warn",
                {
                    arrowParameter: true,
                    memberVariableDeclaration: true,
                    parameter: true,
                    propertyDeclaration: true,
                },
            ],
            "@typescript-eslint/unbound-method": [
                "error",
                { ignoreStatic: true },
            ],
            camelcase: ["warn", {}],
            eqeqeq: ["warn", "smart"],
            "import/no-cycle": "error",
            indent: "off",
            "jsdoc/check-tag-names": [
                "warn",
                { definedTags: ["jest-environment"] },
            ],
            "jsdoc/no-blank-blocks": "warn",
            "jsdoc/require-description-complete-sentence": ["warn", {}],
            "jsdoc/require-jsdoc": [
                "warn",
                {
                    contexts: [
                        {
                            context: "PropertyDefinition",
                            inlineCommentBlock: true,
                        },
                        {
                            context: "TSInterfaceDeclaration",
                            inlineCommentBlock: false,
                        },
                        {
                            context: "TSMethodSignature",
                            inlineCommentBlock: true,
                        },
                        {
                            context: "TSPropertySignature",
                            inlineCommentBlock: true,
                        },
                        {
                            context: "TSEnumDeclaration",
                            inlineCommentBlock: false,
                        },
                        {
                            context: "TSTypeAliasDeclaration",
                            inlineCommentBlock: false,
                        },
                        {
                            context: "ExportNamedDeclaration",
                            inlineCommentBlock: false,
                        },
                    ],
                    publicOnly: false,
                    require: {
                        ClassDeclaration: true,
                        ClassExpression: true,
                        MethodDefinition: true,
                    },
                },
            ],
            "lines-between-class-members": ["warn", "always"],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-invalid-this": ["error", {}],
            "no-null/no-null": "warn",
            "no-restricted-imports": [
                "warn",
                {
                    importNames: ["noop", "filter", "map"],
                    message: "Please import from 'rxjs' instead.",
                    name: "lodash-es",
                },
                {
                    importNames: ["EventEmitter"],
                    message: "Please import { EventEmitter } from '@angular/core' instead.",
                    name: "stream",
                },
            ],
            "no-restricted-syntax": [
                "warn",
                {
                    message: "Do not use getters/setters as they trigger change detection nonstop.",
                    selector: "MethodDefinition[kind='set']",
                },
                {
                    message: "Do not use getters/setters as they trigger change detection nonstop.",
                    selector: "MethodDefinition[kind='get']",
                },
            ],
            "no-useless-rename": "warn",
            "no-var": ["warn"],
            "prefer-const": "off",
            "prettier/prettier": ["warn", {}],
            quotes: [
                "warn",
                "double",
                {
                    avoidEscape: true,
                },
            ],
            "rxjs-angular-x/prefer-takeuntil": [
                "warn",
                {
                    alias: ["takeUntilDestroyed", "safeTakeUntilDestroyed"],
                },
            ],
            "rxjs-x/finnish": [
                "warn",
                {
                    functions: true,
                    methods: true,
                    names: {
                        "^(canActivate|canActivateChild|canDeactivate|canLoad|intercept|resolve|validate)$": false,
                    },
                    parameters: true,
                    properties: true,
                    strict: false,
                    types: {
                        "^EventEmitter$": false,
                    },
                    variables: true,
                },
            ],
            "sort/string-enums": [
                "warn",
                { caseSensitive: false, natural: true },
            ],
            "sort/string-unions": [
                "error",
                { caseSensitive: false, natural: true },
            ],
            "sort/type-properties": "warn",
            "sort-class-members/sort-class-members": [
                "warn",
                {
                    accessorPairPositioning: "getThenSet",
                    groups: {
                        angular: [
                            {
                                name: "/ng.+/",
                                type: "method",
                            },
                        ],
                        "methods-private": [
                            {
                                accessibility: "private",
                                type: "method",
                            },
                        ],
                        "methods-protected": [
                            {
                                accessibility: "protected",
                                type: "method",
                            },
                        ],
                        "methods-public": [
                            {
                                accessibility: "public",
                                type: "method",
                            },
                        ],
                        "properties-private": [
                            {
                                accessibility: "private",
                                type: "property",
                            },
                        ],
                        "properties-protected": [
                            {
                                accessibility: "protected",
                                type: "property",
                            },
                        ],
                        "properties-public": [
                            {
                                accessibility: "public",
                                type: "property",
                            },
                        ],
                    },
                    order: [
                        "[static-properties]",
                        "[static-methods]",
                        "[conventional-private-properties]",
                        "[properties-private]",
                        "[properties-protected]",
                        "[properties-public]",
                        "constructor",
                        "[angular]",
                        "[accessor-pairs]",
                        "[methods-public]",
                        "[methods-protected]",
                        "[methods-private]",
                        "[everything-else]",
                    ],
                },
            ],
            "sort-keys": [
                "warn",
                "asc",
                {
                    caseSensitive: false,
                    natural: true,
                },
            ],
            "unused-imports/no-unused-imports": "warn",
        },
        settings: {
            "import/resolver": {
                node: true,
                typescript: true,
            },
        },
    },
    {
        extends: [
            jestPlugin.configs["flat/recommended"],
            jestPlugin.configs["flat/style"],
        ],
        files: ["**/*.spec.ts"],
        rules: {
            "no-null/no-null": "off",
        },
    },
    {
        extends: [
            ...angular.configs.templateRecommended,
            eslintPluginPrettierRecommended,
        ],
        files: ["**/*.html"],
        rules: {
            "@angular-eslint/template/alt-text": "warn",
            "@angular-eslint/template/attributes-order": "warn",
            "@angular-eslint/template/banana-in-box": "warn",
            "@angular-eslint/template/click-events-have-key-events": "off",
            "@angular-eslint/template/elements-content": "warn",
            "@angular-eslint/template/eqeqeq": "warn",
            "@angular-eslint/template/interactive-supports-focus": "warn",
            "@angular-eslint/template/label-has-associated-control": "warn",
            "@angular-eslint/template/mouse-events-have-key-events": "warn",
            "@angular-eslint/template/no-autofocus": "warn",
            "@angular-eslint/template/no-call-expression": [
                "warn",
                {
                    allowList: [
                        "isLoading",
                        "value",
                    ],
                    allowPrefix: "$",
                },
            ],
            "@angular-eslint/template/no-distracting-elements": "warn",
            "@angular-eslint/template/no-negated-async": "warn",
            "@angular-eslint/template/no-positive-tabindex": "warn",
            "@angular-eslint/template/prefer-control-flow": "warn",
            "@angular-eslint/template/prefer-self-closing-tags": "warn",
            "@angular-eslint/template/role-has-required-aria": "warn",
            "@angular-eslint/template/table-scope": "warn",
            "@angular-eslint/template/valid-aria": "warn",
            "prettier/prettier": [
                "warn",
                {
                    bracketSameLine: true,
                    bracketSpacing: true,
                    endOfLine: "auto",
                    htmlWhitespaceSensitivity: "strict",
                    parser: "angular",
                    quoteProps: "preserve",
                    singleAttributePerLine: true,
                },
            ],
        },
    },
);
