/*eslint no-unused-vars: ["error", { "args": "none" }]*/

class Chromosome {
  constructor(length, generate, mutate, genes) {
    if (length === undefined) {
      throw new Error('length should be defined');
    }

    if (generate === undefined) {
      throw new Error('generate() should be defined');
    }

    this.length = length;
    this.generate = generate;

    if (mutate === undefined) {
      this.mutate = (genes, rate) =>
        genes.map((gene) => (Math.random() < rate ? generate() : gene));
    } else {
      this.mutate = mutate;
    }

    if (genes === undefined) {
      this.genes = Array(length).fill(null).map(generate);
    } else {
      this.genes = genes;
    }
  }

  copyWithGenes(genes) {
    return new Chromosome(this.length, this.generate, this.mutate, genes);
  }

  createRandomCopy() {
    return new Chromosome(this.length, this.generate, this.mutate);
  }
}

export default Chromosome;
