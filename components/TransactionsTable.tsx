import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { transactionCategoryStyles } from "@/constants"
import {
	cn,
	formatAmount,
	formatDateTime,
	getTransactionStatus
} from "@/lib/utils"

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
	const {
		backgroundColor,
		textColor,
		borderColor,
		chipBackgroundColor,
	} = transactionCategoryStyles[category as keyof typeof transactionCategoryStyles] || transactionCategoryStyles.default

	return (
		<div className={cn('category-badge', backgroundColor, chipBackgroundColor)}>
			<div className={cn('size-2 rounded-full', borderColor)} />
				<p className={cn('text-[12px] font-medium', textColor)}>{category}</p>
		</div>
	)
}

const tableHeadItems = {
  transaction: 'Transaction',
  amount: 'Amount',
  status: 'Status',
  date: 'Date',
  channel: 'Channel',
  category: 'Category',
}

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          {Object.values(tableHeadItems).map((item, index) => (
            <TableHead key={index} className="pl-2 pr-10 font-semibold text-[#344054]">
              {item}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t: Transaction) => {
          const status = getTransactionStatus(new Date(t.date))
          const amount = formatAmount(t.amount)
          
          const isDebit = t.type === 'debit';
          const isCredit = t.type === 'credit';

          return (
            <TableRow key={t.$id} className={`${isDebit || amount[0] === '-' ? 'bg-[#FFFBFA]' : 'bg-[#F6FEF9]'} !over:bg-none !border-b-DEFAULT`}>
              <TableCell className="max-w-[250px] pl-2 pr-10">
                <div className="flex items-center gap-3">
                  <h1 className="text-14 truncate font-semibold text-[#344054]">
                    {t.name}
                  </h1>
                </div>
              </TableCell>

              <TableCell className={`pl-2 pr-10 font-semibold ${
                isDebit || amount[0] === '-' ?
                  'text-[#f04438]'
                  : 'text-[#039855]'
              }`}>
                {isDebit ? `-${amount}` : isCredit ? `${amount}` : amount}
              </TableCell>

              <TableCell className="pl-2 pr-10">
                <CategoryBadge category={status} /> 
              </TableCell>

              <TableCell className="min-w-32 pl-2 pr-10">
                {formatDateTime(new Date(t.date)).dateTime}
              </TableCell>

              <TableCell className="pl-2 pr-10 capitalize min-w-24">
               {t.paymentChannel}
              </TableCell>

              <TableCell className="pl-2 pr-10 max-md:hidden">
               <CategoryBadge category={t.category} /> 
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default TransactionsTable