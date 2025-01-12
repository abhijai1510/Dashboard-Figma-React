import { ExpenseGroup, SpendingCategory } from './types'

export const expenseData: ExpenseGroup[] = [
  {
    date: "Today",
    expenses: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/788be02310a788361d7f2052f994ccfe7f4519b49463667de46049fe7063cdc4",
        category: "Grocery",
        time: "5:12 pm",
        description: "Belanja di pasar",
        amount: "-326.800"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0f05fda9df7128a3aef111a31078fe024f6c9013fcf10bf9c6586e5355fa1c9d",
        category: "Transportation",
        time: "5:12 pm",
        description: "Naik bus umum",
        amount: "-15.000"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ef7fa8b2cd39093a7758b568ddfbf819ba700145e21ab08ae5653a3d6fbe0af7",
        category: "Housing",
        time: "5:12 pm",
        description: "Bayar Listrik",
        amount: "-185.750"
      }
    ]
  },
  {
    date: "Monday, 23 March 2020",
    expenses: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/47d758dafd688a3683fbed10b6253d2a20ced73f1157d99ba1626c8f7209dfe0",
        category: "Food and Drink",
        time: "5:12 pm",
        description: "Makan Steak",
        amount: "-156.000"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1891006e39ee01be8bc048b5b86c75de85e9964247dc2f753babde769afffb6d",
        category: "Entertainment",
        time: "5:12 pm",
        description: "Nonton Bioskop",
        amount: "-35.200"
      }
    ]
  }
]

export const spendingCategories: SpendingCategory[] = [
  { category: "Food and Drinks", amount: "872.400", progressWidth: "70%" },
  { category: "Shopping", amount: "1.378.200", progressWidth: "90%" },
  { category: "Housing", amount: "928.500", progressWidth: "75%" },
  { category: "Transportation", amount: "420.700", progressWidth: "50%" },
  { category: "Vehicle", amount: "520.000", progressWidth: "60%" }
]
