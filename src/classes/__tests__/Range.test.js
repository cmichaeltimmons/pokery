import Range from '../Range';


describe('Range', () => {
  it('generates defined hand', () => {
    const range = new Range('Ah2d');
    const possibleHands = [['Ah', '2d']];
    assertDeepInclude(possibleHands, range.get());
  });

  it('generates suited hand', () => {
    const range = new Range('AQs');
    const possibleHands = c.SUITS.map(suit => [`A${suit}`, `Q${suit}`]);
    for (let i = 0; i < 6; i++) {
      assertDeepInclude(possibleHands, range.get());
    }
  });

  it('generates rank-only hand', () => {
    const range = new Range('AQ');
    let possibleHands = [];
    c.SUITS.forEach(suitA => {
      c.SUITS.forEach(suitB => {
        possibleHands.push([`A${suitA}`, `Q${suitB}`]);
      });
    });
    for (let i = 0; i < 24; i++) {
      assertDeepInclude(possibleHands, range.get());
    }
  });

  it('toString', () => {
    assert.equal(new Range('5h2d'), '5h2d');
    assert.equal(new Range('AQs'), 'AQs');
    assert.equal(new Range('AQ'), 'AQ');
  });
});
