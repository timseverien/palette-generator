export type ColorLch = {
	l: number;
	c: number;
	h: number;
};

export function createPalette(color: ColorLch) {}

export function toString(color: ColorLch) {
	return `lch(${color.l} ${color.c} ${color.h})`;
}
