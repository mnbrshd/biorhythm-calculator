import calculateBiorhythms from "./biorhythms"

it("calculates the physical biorhythm", ()=>{
    const biorhythms = calculateBiorhythms('1996-08-03', '2023-01-01');
    expect(biorhythms.physical).toBeCloseTo(0.3984);
})

it("calculates the emotional biorhythm", ()=>{
    const biorhythms = calculateBiorhythms('1996-08-03', '2023-01-01');
    expect(biorhythms.emotional).toBeCloseTo(-0.2225);
})

it("calculates the intellectual biorhythm", ()=>{
    const biorhythms = calculateBiorhythms("1996-08-03", "2023-01-01");
    expect(biorhythms.intellectual).toBeCloseTo(0.8660);
})