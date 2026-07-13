// ClearCove Pools — pool chemical dosing (ported verbatim from the approved design's JS).
export function compute(v) {
  const gallons = v.unit === 2 ? (v.volume || 0) * 0.264172 : (v.volume || 0);
  const fc = v.fc, target = v.targetFc, ph = v.ph, ta = v.ta, cya = v.cya, strength = v.strength || 10;
  const delta = Math.max(0, target - fc);
  const chlorine = strength ? (gallons / 10000) * delta * ((12.8 / strength) * 10) : 0;
  const acid = ph > 7.6 ? (gallons / 10000) * Math.max(0, ph - 7.5) * 20 * (Math.max(60, ta) / 100) : 0;
  const baking = ta < 80 ? (gallons / 10000) * ((80 - ta) / 10) * 1.4 : 0;
  const shock = fc < 1 || cya > 90;
  const balanced = fc >= 1 && fc <= 4 && ph >= 7.2 && ph <= 7.8 && ta >= 80 && ta <= 120 && cya >= 30 && cya <= 60;
  return {
    status: shock ? 'shock' : balanced ? 'balanced' : 'attention',
    outputs: {
      chlorine: {
        value: chlorine < 0.1 ? 'None' : chlorine.toFixed(1) + ' fl oz',
        note: 'to reach ' + target + ' ppm FC'
      },
      acid: { value: acid < 0.1 ? 'None' : '≈ ' + acid.toFixed(1) + ' fl oz' },
      baking: { value: baking < 0.01 ? 'None' : '≈ ' + baking.toFixed(2) + ' lb' }
    }
  };
}
