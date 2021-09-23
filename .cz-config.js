module.exports = {
  types: [
    {
      value: ':sparkles: feat',
      name: 'feat: A new feature'
    },
    {
      value: ':bug: fix',
      name: 'fix: A bug fix'
    },
    {
      value: ':pencil2: docs',
      name: 'docs: Documentation only changes'
    },
    {
      value: ':lipstick: style',
      name: 'style: Markup, white-space, formatting, missing semi-colons...'
    },
    {
      value: ':recycle: refactor',
      name: 'refactor: A code change that neither fixes a bug or adds a feature'
    },
    {
      value: ':zap: perf',
      name: 'perf: A code change that improves performance'
    },
    {
      value: ':white_check_mark: test',
      name: 'test: Add, update, or pass tests'
    },
    {
      value: ':rewind: revert',
      name: 'revert: Reverts a previous commit'
    },
    {
      value: ':package: build',
      name: 'build: Changes that affect the build system or external dependencies（example scopes：gulp，broccoli，npm）'
    },
    {
      value: ':construction_worker: chore',
      name: 'chore: Build process or auxiliary tool changes'
    },
    {
      value: ':green_heart: ci',
      name: 'ci: CI related changes'
    }
  ],
  messages: {
    type: '请选择提交类型(必填)',
    customScope: '请输入文件修改范围(可选)',
    subject: '请简要描述提交(必填)',
    body: '请输入详细描述(可选)',
    breaking: '列出任何BREAKING CHANGES(可选)',
    footer: '请输入要关闭的issue(可选)',
    confirmCommit: '确定提交此说明吗？'
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'], // 当提交类型为feat、fix时才有破坏性修改选项
  subjectLimit: 72
};
