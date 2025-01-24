import { FlySpecie } from "../../fly-species/entities/fly-specie.entity";
import { FlyGenus } from "./fly-genus.entity";

describe('FlyGenus Entity', () => {
  it('should generate a unique id before insert', () => {
    const flyGenus = new FlyGenus();
    flyGenus.generateId();
    expect(flyGenus.id).toBeDefined();
    
    expect(flyGenus.id).toHaveLength(64); // SHA-256 hash length
  });

  it('should have a relation with FlySpecies', () => {
    const flySpecie = new FlySpecie();
    const flyGenus = new FlyGenus();
    flyGenus.flySpecies = [flySpecie];
    expect(flyGenus.flySpecies).toContain(flySpecie);
  });
});