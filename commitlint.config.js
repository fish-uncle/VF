module.exports = {
	parserPreset: {
		parserOpts: {
			headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
			headerCorrespondence: [
				'type',
				'scope',
				'subject',
			],
			referenceActions: [
				'close',
				'closes',
				'closed',
				'fix',
				'fixes',
				'fixed',
				'resolve',
				'resolves',
				'resolved',
			],
			issuePrefixes: ['#'],
			noteKeywords: ['BREAKING CHANGE', '不兼容变更'],
			fieldPattern: /^-(.*?)-$/,
			revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
			revertCorrespondence: ['header', 'hash'],
			warn() {
			},
			mergePattern: null,
			mergeCorrespondence: null,
		},
	},
	rules: {
		'body-leading-blank': [2, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 108],
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
		'type-enum': [
			2,
			'always',
			[
				'feat', // 新功能（feature）
				'fix', // 修补bug
				'perf',
				'style', // 格式（不影响代码运行的变动）
				'docs', // 文档（documentation）
				'test', // 增加测试
				'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
				'build',
				'ci',
				'chore',  // 构建过程或辅助工具的变动
				'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
			],
		],
	},
};
