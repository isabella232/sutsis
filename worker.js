window = this;
importScripts('data/parsed4.js', 'lib/fullproof/unicode/categ_letters_numbers.js', 'lib/fullproof/unicode/normalizer_lowercase_nomark.js', 'lib/fullproof/unicode/unicode.js', 'lib/fullproof/analyzers.js', 'lib/fullproof/normalizers.js', 'lib/fullproof/misc/dataloader.js', 'lib/fullproof/capabilities.js', 'lib/fullproof/utils.js', 'lib/fullproof/common-engine.js', 'lib/fullproof/boolean-engine.js', 'lib/fullproof/resultsets.js', 'lib/fullproof/storemanager.js', 'lib/fullproof/stores/memory_store.js', 'search.js');

var searchId;
this.onmessage = function(ev) {
  if (ev.data.kind == 'newSearch') {
    searchId = ev.data.searchId;
    search(ev.data.query, function(results) {
      postMessage({kind: 'searchResults', results: results,
                   query:ev.data.query});
    });
  }
}

setupSearchEngine(function() {
  postMessage({kind: 'ready'});
})

