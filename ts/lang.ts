export type OperationEffect = "add" | "update" | "delete"
export const translationTree = {
	infobutton: {
		en: "attention",
		ja: "注意",
	},
	info: {
		appendNotWork: {
			en: "import(append) does not work well",
			ja: "追加引導は上手く動作しません",
		},
		refreshAlert: {
			en: "page refreshing will reset all!",
			ja: "頁を更新すると全てまっさらな状態に戻ります！",
		},
	},
	example: {
		en: "example",
		ja: "例",
	},
	add: {
		en: "add",
		ja: "追加",
	},
	update: {
		en: "udpate",
		ja: "更新",
	},
	delete: {
		en: "delete",
		ja: "削除",
	},
	confirm: {
		alreadyExist: {
			en: "same entry already exists, which will be overloaded.",
			ja: "同じ条件の組がもうあるので、上書きされます。",
		},
	},
	error: {
		parse: {
			en: "couldn't parsed as JSON",
			ja: "解析不能",
		},
	},
	headerTitle: {
		list: {
			similar: { en: "similar", ja: "類似" },
		},
	},
	tooltip: {
		operation: {
			add: (from: string, to: string) => ({
				en: `added: ${from} → ${to}`,
				ja: `追加: ${from} → ${to}`,
			}),
			delete: (from: string, to: string) => ({
				en: `deleted: ${from} → ${to}`,
				ja: `削除: ${from} → ${to}`,
			}),
			update: (from: string, to: string) => (to1: string) => ({
				en: `updated: ${from} → ${to}`,
				ja: `更新: ${from} → (${to} > ${to1})`,
			}),
		},
		fail: (opef: OperationEffect) => ({
			en: `failed to ${translationTree[opef].en}`,
			ja: `${translationTree[opef].ja}に失敗しました`,
		}),
	},
	form: {
		rules: {
			required: {
				en: "input something",
				ja: "何か入力してください",
			},
			minlength: (min: number) => ({
				en: `input at least ${min} characters`,
				ja: `最低${min}文字入力してください`,
			}),
		},
		helperText: {
			invalid: {
				en: "invalid",
				ja: "無効",
			},
		},
		label: {
			from: {
				en: "from",
				ja: "置換対象",
			},
			ic: {
				en: "ignore case",
				ja: "大文字小文字を無視する",
			},
			mw: {
				en: "match word",
				ja: "単語のみ",
			},
			sc: {
				en: "smart case",
				ja: "賢い大小文字",
			},
			to: {
				en: "to",
				ja: "置換結果",
			},
		},
		languages: {
			en: "English",
			ja: "日本語",
		},
	},
	language: {
		en: "language",
		ja: "表示言語",
	},
	unit: {
		point: {
			en: "point",
			ja: "点",
		},
	},
	showPoint: {
		en: "show match point",
		ja: "一致度表示",
	},
	searchDelay: {
		label: {
			en: "search delay",
			ja: "検索遅延",
		},
		help: {
			en: "increase this if input lagged",
			ja: "入力がもたつくなら数値を大きく",
		},
	},
	output: {
		buttons: {
			copy: {
				en: "copy",
				ja: "複製",
			},
			append: {
				en: "import (append)",
				ja: "追加引導",
			},
			initialize: {
				en: "import (initialize)",
				ja: "初期化引導",
			},
		},
	},
}
