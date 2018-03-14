/// <reference types="mapbox-gl" />
/// <reference types="react" />
import * as MapboxGl from 'mapbox-gl';
export declare type MapEvent = (map: MapboxGl.Map, evt: React.SyntheticEvent<any>) => void;
export interface Events {
    onStyleLoad?: MapEvent;
    onResize?: MapEvent;
    onDblClick?: MapEvent;
    onClick?: MapEvent;
    onMouseMove?: MapEvent;
    onMouseOut?: MapEvent;
    onMoveStart?: MapEvent;
    onMove?: MapEvent;
    onMoveEnd?: MapEvent;
    onMouseDown?: MapEvent;
    onMouseUp?: MapEvent;
    onDragStart?: MapEvent;
    onDragEnd?: MapEvent;
    onDrag?: MapEvent;
    onZoomStart?: MapEvent;
    onZoom?: MapEvent;
    onZoomEnd?: MapEvent;
    onPitch?: MapEvent;
    onPitchStart?: MapEvent;
    onPitchEnd?: MapEvent;
    onWebGlContextLost?: MapEvent;
    onWebGlContextRestored?: MapEvent;
    onRemove?: MapEvent;
    onContextMenu?: MapEvent;
    onRender?: MapEvent;
    onError?: MapEvent;
    onSourceData?: MapEvent;
    onDataLoading?: MapEvent;
    onStyleDataLoading?: MapEvent;
    onTouchCancel?: MapEvent;
    onData?: MapEvent;
    onSourceDataLoading?: MapEvent;
    onTouchMove?: MapEvent;
    onTouchEnd?: MapEvent;
    onTouchStart?: MapEvent;
    onStyleData?: MapEvent;
    onBoxZoomStart?: MapEvent;
    onBoxZoomEnd?: MapEvent;
    onBoxZoomCancel?: MapEvent;
    onRotateStart?: MapEvent;
    onRotate?: MapEvent;
    onRotateEnd?: MapEvent;
}
export declare type EventMapping = {
    [T in keyof Events]: string;
};
export declare const events: EventMapping;
export declare type Listeners = {
    [T in keyof Events]: (evt: React.SyntheticEvent<any>) => void;
};
export declare const listenEvents: (partialEvents: EventMapping, props: Partial<Events>, map: MapboxGl.Map) => any;
export declare const updateEvents: (listeners: Listeners, nextProps: Partial<Events>, map: MapboxGl.Map) => any;
