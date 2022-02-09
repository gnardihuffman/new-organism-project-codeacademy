// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory(num, DNArr) {
  let obj = {specimenNum: num,
            dna: DNArr,
            mutate: function mutate() {
                let randBase = Math.floor(Math.random()*15);
                let newBase = returnRandBase();
                if (newBase == this.dna[randBase]) {
                  let furtherBase = returnRandBase();
                  this.dna[randBase] = furtherBase;
                } else {
                  this.dna[randBase] = newBase;
                }
            return this.dna;
            },
          compareDNA: function compareDNA(pObj) {
            let amtSame = 0;
            for (i=0; i<15; i++) {
              if (this.dna[i] == pObj.dna[i]) {
                amtSame ++;
              }
            }
            console.log(`Specimen #1 and specimen #2 have ${(amtSame/15)*100}% DNA in common.`);

          },
          willLikelySurvive: function willLikelySurvive() {
            let cAndG = 0;
            for (i=0; i<15; i++) {
              if (this.dna[i] == 'C' || this.dna[i] == 'G') {
                cAndG ++;
              }
            }
            if ((cAndG/15) > 0.6) {
              return true;
            } else {
              return false
            }
          }
            };
  return obj;
}

 //testing: 

const test1 = pAequorFactory(1,mockUpStrand());
const test2 = pAequorFactory(2,mockUpStrand());
//console.log(test2.dna);
//console.log(test1.compareDNA(test2));
//console.log(test2.willLikelySurvive());

let naturalP = [];
let u = 0
while (u<31) {
  let newSpec = pAequorFactory(u,mockUpStrand())
//console.log(newSpec);
  if (newSpec.willLikelySurvive = true) {
    naturalP.push(newSpec);
  }
  u++;
}
//console.log(naturalP);
console.log(naturalP);




