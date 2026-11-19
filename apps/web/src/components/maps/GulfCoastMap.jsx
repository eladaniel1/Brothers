import mainSvg from './gulf-map.svg?raw';
import insetSvg from './gulf-inset.svg?raw';

const key = `<div class="map-key"><span><i style="background:#E9DFCC;border:1px solid #0f223d"></i>Counties we serve</span><span><i style="background:#0f223d;border-radius:50%;box-shadow:0 0 0 2px #C9B38C"></i>Tampa office</span></div>`;

const GulfCoastMap = ({ inset = true, className = '' }) => (
    <div
        className={`map-box ${inset ? '' : 'no-inset'} ${className}`}
        dangerouslySetInnerHTML={{ __html: mainSvg + (inset ? insetSvg : '') + key }}
    />
);

export default GulfCoastMap;
