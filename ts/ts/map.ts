import { groupByForList } from "./util.list"

export const getButNeverUndefined =
	<K, V>(mapobj: Map<K, V>) =>
	(key: K, defaultValue: V) => {
		const got = mapobj.get(key)
		return got === undefined ? defaultValue : got
	}

export const caseUndefined =
	<V>(value: V | undefined) =>
	<T>(ok: (v: V) => T, ud: T) =>
		value === undefined ? ud : ok(value)

export const fallback =
	<V>(escapeIf: (v: V) => boolean, defaultValue: V) =>
	(v: V): V =>
		escapeIf(v) ? defaultValue : v

export const insertOr =
	<K, V>(mapobj: Map<K, V>) =>
	(key: K, value: V) =>
	(orDo: (got: V) => Map<K, V>): Map<K, V> => {
		const got = mapobj.get(key)
		return got === undefined ? new Map([...mapobj.entries(), [key, value]]) : orDo(got)
	}

export const insertElse =
	<K, V>(mapobj: Map<K, V>, key: K) =>
	(keyExists?: (got: V, value: V) => V, setter?: (v?: V, hasKey?: boolean) => V) =>
	(value: V, defaultValue?: V) => {
		const got = mapobj.get(key)
		const simpleAppend = (value: V) =>
			new Map([...mapobj.entries(), [key, setter === undefined ? value : setter(value, false)]])
		return got === undefined
			? simpleAppend(value)
			: keyExists === undefined
			? simpleAppend(value)
			: simpleAppend(keyExists(got, value))
	}

export const modifyMap =
	<K, V>(mapobj: Map<K, V>) =>
	(key: K, defaultValue: V) =>
	(modifier: (value: V, has?: boolean, map?: Map<K, V>) => V): Map<K, V> => {
		const got = mapobj.get(key)
		mapobj.set(key, modifier(got ?? defaultValue, got !== undefined, mapobj))
		return mapobj
	}

export const mapUnions =
	<K, V>(maps: Map<K, V>[]) =>
	(defaultValue: V, unionFunc: (v1: V, v2: V, key?: K) => V): Map<K, V> =>
		maps.reduce((mm, m) => mapUnion(defaultValue, unionFunc)(mm, m), new Map())

export const mapUnion =
	<K, V>(defaultValue: V, unionFunc: (v1: V, v2: V, key?: K) => V) =>
	(map1: Map<K, V>, map2M: Map<K, V>): Map<K, V> =>
		// [...map1.entries()].reduce((m, [k,v])=>
		//   insertElse(m, k)(
		//     (v1, v2) => unionFunc(v1,v2,k)
		//   )(v, defaultValue)
		// , map2M)
		new Map(
			[...groupByForList([map1, map2M].flatMap(m => [...m.entries()]))(([k, v]) => k).entries()]
				.map(([k, kvs]): [K, V[]] => [
					k,
					ifdo(kvs.map(([k, v]) => v))(
						(t: V[]) => t.length < 2,
						t => [...t, defaultValue]
					),
				])
				.map(([k, vs]) => [k, unionFunc(vs[0] ?? defaultValue, vs[1] ?? defaultValue, k)])
		)

export const mapUnionsToAverage = <K, V>(maps: Map<K, number>[]) =>
	map_map(mapUnions(maps)(0, (s, d) => s + d))(v =>
		ifdo(maps.length)(
			d => d != 0,
			d => v / d
		)
	)

export const ifdo =
	<T>(t: T) =>
	(iffunc: (t: T) => boolean, dofunc: (t: T) => T) =>
		iffunc(t) ? dofunc(t) : t

export const ifvalue =
	<T>(iffunc: (t: T) => boolean, defaultValue: T) =>
	(t: T) =>
		iffunc(t) ? defaultValue : t

export const map_map =
	<K, V>(m: Map<K, V>) =>
	<T>(mapf: (v: V, m: Map<K, V>) => T) =>
		new Map([...m.entries()].map(([k, v]) => [k, mapf(v, m)]))
