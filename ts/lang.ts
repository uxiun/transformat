export type OperationEffect = "add"|"update"|"delete"
export const translationTree = {
  add: {
    en: "add",
    ja: "追加",
  },
  update: {
    en: "udpate",
    ja: "更新"
  },
  delete: {
    en: "delete",
    ja: "削除"
  },
  confirm: {
    alreadyExist: {
      en: "same entry already exists, which will be overloaded.",
      ja: "同じ条件の組がもうあるので、上書きされます。"
    }
  },
  error: {
    parse: {
      en: "couldn't parsed as JSON",
      ja: "解析不能",
    }
  },
  headerTitle: {
    list: {
      similar: {en: "similar", ja: "類似"}
    }
  },
  tooltip: {
    operation: {
      add: (from: string, to: string)=> ({
        en: `added: ${from} → ${to}`
        ,ja: `追加: ${from} → ${to}`
      }),
      delete: (from: string, to: string)=> ({
        en: `deleted: ${from} → ${to}`
        ,ja: `削除: ${from} → ${to}`
      }),
      update: (from: string, to: string)=>(to1: string)=> ({
        en: `updated: ${from} → ${to}`
        ,ja: `更新: ${from} → (${to} > ${to1})`
      }),
    },
    fail: (opef: OperationEffect) => ({
      en: `failed to ${translationTree[opef].en}`,
      ja: `${translationTree[opef].ja}に失敗しました`
    }),
    
  },
  form: {
    rules: {
      required: {
        en: "input something",
        ja: "何か入力してください"
      },
      minlength: (min: number)=> ({
        en: `input at least ${min} characters`
        ,ja: `最低${min}文字入力してください`
      })
    },
    helperText: {
      invalid: {
        en: "invalid",
        ja: "無効"
      }
    }
  },
  unit: {
    point: {
      en: "point"
      ,ja: "点"
    },
  },
  showPoint: {
    en: "show match point",
    ja: "一致度表示"
  },
  searchDelay: {
    label:
    {
      en: "search delay",
      ja: "検索遅延"
    },
    help: {
      en: "increase this if input lagged",
      ja: "入力がもたつくなら数値を大きく"
    }
  }
}

