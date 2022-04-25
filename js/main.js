// my solution
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
  }


// other good ideas
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }

  const DNAtoRNA = dna => dna.replace(/T/g, 'U');
