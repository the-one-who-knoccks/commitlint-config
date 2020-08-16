module.exports = {
  types: [
    {
      value: '✨ feat',
      name: '✨ feat: A new feature'
    },
    {
      value: '🐛 bugfix',
      name: '🐛 bugfix: A bug fix'
    },
    {
      value: '🔒 securityfix',
      name: '🔒 securityfix:  A security fix'
    },
    {
      value: '📚 docs',
      name: '📚 docs: Documentation only changes'
    },
    {
      value: '🎨 style',
      name:
        '🎨 style:  Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)'
    },
    {
      value: '♻️ refactor',
      name:
        '♻️ refactor:  A code change that neither fixes a bug nor adds a feature'
    },
    {
      value: '🔖 release',
      name: '🔖 release:  A new Release'
    },
    {
      value: '📇 metadata',
      name: '🔖 metadata: A metadata feature'
    },
    {
      value: '🌍 inter',
      name: '🌍 inter:  Internationalization addition'
    },
    {
      value: '💩 deprecation',
      name: '💩 deprecation:  A deprecation'
    },
    {
      value: '♿ accessibility',
      name: '♿ accessibility:  A new accessibility feature/fix'
    },
    {
      value: '🗑️ removal',
      name: '🗑️ removal:  A removal'
    },
    {
      value: '🐎 perf',
      name: '🐎 perf: A code change that improves performance'
    },
    {
      value: '🧪 test',
      name: ' 🧪 test:  Adding missing tests'
    },
    {
      value: '🌈 chore',
      name:
        '🌈 chore:  Changes to the build process or auxiliary tools\n            and libraries such as documentation generation'
    },
    {
      value: '🔄 revert',
      name: '🔄 revert: Revert to a commit'
    },
    {
      value: '🚧 WIP',
      name: '🚧 WIP:  Work in progress'
    }
  ],

  scopes: [

  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "Select the type of change that you're committing:",
    scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    body:
      'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    breaking: 'List any BREAKING CHANGES (optional):\n',
    footer:
      'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    confirmCommit: 'Are you sure you want to proceed with the commit above?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  skipQuestions: [],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
