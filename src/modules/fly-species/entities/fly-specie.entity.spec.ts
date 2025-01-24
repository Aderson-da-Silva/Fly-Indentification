import { FlyGenus } from "../../fly-genus/entities/fly-genus.entity";
import { FlySpecie } from "./fly-specie.entity";
import { FlyCharacteristic } from "../../fly-characteristics/entities/fly-characteristic.entity";

describe('FlySpecie Entity', () => {
  it('should generate a unique id before insert', () => {
    const flySpecie = new FlySpecie();
    flySpecie.genereteId();
    expect(flySpecie.id).toBeDefined();
    expect(flySpecie.id).toHaveLength(64); // SHA-256 hash length
  });

  it('should have a relation with FlyGenus', () => {
    const flyGenus = new FlyGenus();
    const flySpecie = new FlySpecie();
    flySpecie.genus = flyGenus;
    expect(flySpecie.genus).toBe(flyGenus);
  });

  it('should have a relation with FlyCharacteristics', () => {
    const flyCharacteristic = new FlyCharacteristic();
    const flySpecie = new FlySpecie();
    flySpecie.flyCharacteristics = [flyCharacteristic];
    expect(flySpecie.flyCharacteristics).toContain(flyCharacteristic);
  });
});