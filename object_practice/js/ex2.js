const inventory = {
    gold: 500,
    pouch: ['flint', 'twine', 'gemstone'],
    backpack: ['xylophone', 'dagger', 'bedroll', 'bread loaf']
}
inventory.poket = ['seashell', 'strange berry', 'lint'];
inventory.backpack.splice(1,1);
inventory.gold += 50;
delete inventory.pouch;
console.log(inventory);
