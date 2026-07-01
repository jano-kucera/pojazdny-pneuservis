// @ts-check
import pluginJs from "@eslint/js";
import { configs as angularConfigs } from "angular-eslint";
import { defineConfig } from "eslint/config";
import { importX } from "eslint-plugin-import-x";
import jsdocPlugin from "eslint-plugin-jsdoc";
import noNullPlugin from "eslint-plugin-no-null";
import { configs as perfectionistConfigs } from "eslint-plugin-perfectionist";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import rxjsAngularX from "eslint-plugin-rxjs-angular-x";
import rxjsX from "eslint-plugin-rxjs-x";
import sortPlugin from "eslint-plugin-sort";
import unusedImports from "eslint-plugin-unused-imports";
import globals from "globals";
import { configs as tseslintConfigs } from "typescript-eslint";

export default defineConfig(
    {
        ignores: [
            ".angular/",
            ".vscode/",
            "coverage/",
            "dist/",
            "node_modules/",
            "src/app/common/client-common.ts",
            "src/app/generated/",
            "src/assets/",
        ],
    },
    {
        extends: [
            pluginJs.configs.recommended,
            angularConfigs.tsRecommended,
            tseslintConfigs.strictTypeChecked,
            tseslintConfigs.stylisticTypeChecked,
            importX.flatConfigs.recommended,
            importX.flatConfigs.typescript,
            rxjsX.configs.recommended,
            jsdocPlugin.configs["flat/recommended-typescript"],
            sortPlugin.configs["flat/recommended"],
            perfectionistConfigs["recommended-natural"],
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
            "no-null": noNullPlugin,
            "rxjs-angular-x": rxjsAngularX,
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
            "@typescript-eslint/consistent-generic-constructors": ["warn", "type-annotation"],
            "@typescript-eslint/consistent-type-assertions": [
                "warn",
                {
                    assertionStyle: "as",
                    objectLiteralTypeAssertions: "never",
                },
            ],
            "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
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
            "@typescript-eslint/no-empty-object-type": ["error", { allowInterfaces: "always" }],
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
            "@typescript-eslint/no-unnecessary-type-conversion": "off",
            "@typescript-eslint/no-unnecessary-type-parameters": "warn",
            "@typescript-eslint/no-unsafe-argument": "off",
            "@typescript-eslint/no-unsafe-assignment": "off",
            "@typescript-eslint/no-unsafe-call": "off",
            "@typescript-eslint/no-unsafe-declaration-merging": "off",
            "@typescript-eslint/no-unsafe-member-access": "off",
            "@typescript-eslint/no-unsafe-return": "off",
            "@typescript-eslint/no-unused-vars": "off",
            "@typescript-eslint/no-useless-default-assignment": [
                "warn",
                {
                    allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
                },
            ],
            "@typescript-eslint/prefer-nullish-coalescing": "off",
            "@typescript-eslint/restrict-plus-operands": [
                "warn",
                {
                    allowAny: true,
                    skipCompoundAssignments: false,
                },
            ],
            "@typescript-eslint/restrict-template-expressions": "off",
            "@typescript-eslint/switch-exhaustiveness-check": [
                "warn",
                {
                    considerDefaultExhaustiveForUnions: true,
                },
            ],
            "@typescript-eslint/typedef": [
                "warn",
                {
                    arrowParameter: true,
                    memberVariableDeclaration: true,
                    parameter: true,
                    propertyDeclaration: true,
                },
            ],
            "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
            camelcase: ["warn", {}],
            eqeqeq: ["warn", "smart"],
            "import-x/order": "off",
            indent: "off",
            "jsdoc/check-tag-names": "warn",
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
                    importNames: ["CurrencyPipe", "DatePipe", "DecimalPipe"],
                    message: "Please import from 'app/pipes' instead.",
                    name: "@angular/common",
                },
                {
                    importNames: ["noop", "filter", "map"],
                    message: "Please import from 'rxjs' instead.",
                    name: "lodash-es",
                },
                {
                    importNames: ["round"],
                    message: "Please import from 'app/utilities/numeric/round' instead.",
                    name: "lodash-es",
                },
                {
                    importNames: ["EventEmitter"],
                    message: "Please import { EventEmitter } from '@angular/core' instead.",
                    name: "stream",
                },
                {
                    importNames: [
                        "Subject",
                        "Subscription",
                        "Observable",
                    ],
                    message: "Please import from 'rxjs' instead.",
                    name: "angular-slickgrid",
                },
                {
                    importNames: [
                        "isDefined",
                    ],
                    message: "Please import from 'app/utils' instead.",
                    name: "angular-slickgrid",
                },
                {
                    importNames: ["TranslatePipe"],
                    message: "Please import from 'app/pipes/translate.pipe' instead. The NGX TranslatePipe is just a transitive dependency.",
                    name: "@ngx-translate/core",
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
            "perfectionist/sort-classes": [
                "warn",
                {
                    groups: [
                        "static-property",
                        "static-block",
                        "static-method",
                        "private-property",
                        "private-function-property",
                        "protected-property",
                        "protected-function-property",
                        "public-property",
                        "public-function-property",
                        "property",
                        "constructor",
                        ["get-method", "set-method"],
                        "public-method",
                        "protected-method",
                        "private-method",
                        "unknown",
                    ],
                    ignoreCallbackDependenciesPatterns: ["^computed", "^resource", "^toSignal"],
                    type: "unsorted",
                },
            ],
            "perfectionist/sort-imports": "off",
            "perfectionist/sort-modules": "off",
            "prefer-const": "off",
            "prettier/prettier": [
                "warn",
                {
                    experimentalOperatorPosition: "start",
                },
            ],
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
            "sort-keys": "off",
            "unused-imports/no-unused-imports": "warn",
        },
    },
    {
        extends: [...angularConfigs.templateRecommended, eslintPluginPrettierRecommended],
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
                        "gridReference",
                        "hasValue",
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
                    experimentalOperatorPosition: "start",
                    htmlWhitespaceSensitivity: "strict",
                    parser: "angular",
                    quoteProps: "preserve",
                    singleAttributePerLine: true,
                },
            ],
        },
    },
);
