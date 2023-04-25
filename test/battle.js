// Load dependencies
const { expect } = require('chai');

// Start test block
describe('ChainBattles', function () {
  before(async function () {
    this.ChainBattles = await ethers.getContractFactory('ChainBattles');
  });

  beforeEach(async function () {
    this.chainBattles = await this.ChainBattles.deploy();
    await this.chainBattles.deployed();
  });

  /*
  // Test case
  it('mint', async function () {
    // Store a value
    await this.chainBattles.mint();

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.chainBattles.getNumToken()).toString()).to.equal('1');
  });
  */
 
  it('train', async function () {
    // Store a value        
    await this.chainBattles.mint();
    await this.chainBattles.train(1);

    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await this.chainBattles.getNumToken()).toString()).to.equal('1');
  });

  
});