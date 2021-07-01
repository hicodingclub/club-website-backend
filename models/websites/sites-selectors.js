const fieldMeta = {
    readOnly: {
      readOnly: true,
    },
    siteLink: {
      readOnly: true,

      innerHtml: true,
      pipe: 'MddsSiteAnchorPipe',
    },
    userLink: {
      readOnly: true,

      innerHtml: true,
      pipe: 'MddsAnchorPipe',
    }
  };
const  selectors = {
    MddsSiteAnchorPipe: {
      selector: 'mddsAnchor',
      module: 'MddsCoreModule', //MddsCoreModule. Already imported. So skip it.
      package: '@hicoder/angular-core',
      inputs: [{
        key: 'urlTemplate',
        value: '/sites/[REPLACEME]'
      }, {
        key: 'displayTemplate',
        value: '[REPLACEME]'
      }],
    },
    MddsAnchorPipe: {
        selector: 'mddsAnchor',
        module: '', //MddsCoreModule. Already imported. So skip it.
        package: '@hicoder/angular-core',
        inputs: [{
          key: 'urlTemplate',
          value: '/users/muser/detail/[REPLACEME]'
        }, {
          key: 'displayTemplate',
          value: '[REPLACEME]'
        }],
      },
  };
module.exports = {
    fieldMeta,
    selectors,
}