export const TimeSlider = ({
    value,
    max,
    onChange,
}: {
    value: number;
    max: number;
    onChange: (value: number) => void;
}) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
        <span style={{ whiteSpace: 'nowrap' }}>currentTime</span>
        <input
            type="range"
            min={0}
            max={max}
            step={0.1}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            style={{ flex: 1 }}
        />
        <span style={{ whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>{value.toFixed(1)}s</span>
    </div>
);
