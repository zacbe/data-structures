// [t]est => 1
// t[e]st => 1
// te[s]t => 1
// tes[t] => 1

// [te]st => 2
// t[es]t => 2
// te[st] => 2

// [tes]t => 3
// t[est] => 3

// [test] => 3

// first run = 4
// second run = 6
// third run = 6
// fourth run = 3
// f + s + t + f;

// total 19 strength

// [g]ood => 1
// g[o]od => 1
// go[o]d => 1
// goo[d] => 1

// [go]od => 2
// g[oo]d => 1
// go[od] => 2

// [goo]d => 2
// g[ood] => 2

// [good] => 3

// first run = 4
// second run = 5
// third run = 4
// fourth run = 3
// f + s + t + f;

// total 16 strength
