module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-rational-order',
        'stylelint-prettier/recommended',
        'stylelint-config-prettier',
    ],
    rules: {
        'color-no-invalid-hex': true,
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global'],
            },
        ],
        'font-family-name-quotes': 'always-unless-keyword',
        'selector-class-pattern': [
            // 命名规范 -
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected class selector to be kebab-case',
            },
        ],
        'no-empty-source': null,
        'named-grid-areas-no-invalid': null,
        'unicode-bom': 'never',
        'no-descending-specificity': null,
        'font-family-no-missing-generic-family-keyword': null,
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'string-quotes': 'single', // 单引号
        'at-rule-empty-line-before': null,
        'at-rule-name-case': 'lower',
        'at-rule-name-space-after': 'always-single-line',
        'at-rule-no-vendor-prefix': true,
        'at-rule-no-unknown': null,
        'at-rule-name-case': 'lower', // 指定@规则名的大小写
        'length-zero-no-unit': true, // 禁止零长度的单位（可自动修复）
        'shorthand-property-no-redundant-values': true, // 简写属性
        'number-leading-zero': 'never', // 小数不带0
        'declaration-block-no-duplicate-properties': true, // 禁止声明快重复属性
        'no-descending-specificity': true, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。
        'selector-max-id': 0, // 限制一个选择器中 ID 选择器的数量
        indentation: [
            4,
            {
                // 指定缩进  warning 提醒
                severity: 'warning',
            },
        ],
        'font-family-name-quotes': false,
        'selector-class-pattern': '^[a-z][a-zA-Z0-9]+$',
        'block-opening-brace-newline-after': ['always'],
        'block-closing-brace-newline-before': ['always'],
    },
};
