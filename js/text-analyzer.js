function analyzeText() {
    const text = document.getElementById("longText").value;
  
    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    const wordCount = (text.match(/\b\w+\b/g) || []).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const newlineCount = (text.match(/\n/g) || []).length;
    const specialSymbolCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
  
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them'];
    const prepositions = ['in', 'on', 'at', 'by', 'with', 'about', 'against', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below'];
    const articles = ['a', 'an', 'the'];
  
    function countGroup(tokens, group) {
      return group.reduce((acc, word) => {
        acc[word] = tokens.filter(w => w === word).length;
        return acc;
      }, {});
    }
  
    const pronounCount = countGroup(words, pronouns);
    const prepositionCount = countGroup(words, prepositions);
    const articleCount = countGroup(words, articles);
  
    const output = `
  Letters: ${letterCount}
  Words: ${wordCount}
  Spaces: ${spaceCount}
  Newlines: ${newlineCount}
  Special Symbols: ${specialSymbolCount}
  
  Pronouns Count: ${JSON.stringify(pronounCount, null, 2)}
  Prepositions Count: ${JSON.stringify(prepositionCount, null, 2)}
  Articles Count: ${JSON.stringify(articleCount, null, 2)}
    `;
  
    document.getElementById("output").textContent = output;
  }
  