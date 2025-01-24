'use client';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { categoryColors } from '@/data/categories';
import { format } from 'date-fns';
import { Clock, RefreshCw } from 'lucide-react';
import React from 'react';

const RECURRING_INTERVALS = {
  DAILY: 'Daily',
  WEEKLY: 'Weekly',
  MONTHLY: 'Monthly',
  YEARLY: 'Yearly',
};

const TransactionTable = ({ transactions }) => {
  const handleSort = (key) => {
    console.log(key);
  };

  const handleSelectAll = (checked) => {
    console.log(checked);
  };
  return (
    <div>
      {/* {Filters} */}

      {/* {Transactions} */}
      <div className="rounded-md border">
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox onCheckedChange={handleSelectAll} />
              </TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('date')}>
                <div className="flex items-center">Date</div>
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="cursor-pointer" onClick={() => handleSort('category')}>
                <div className="flex items-center">Category</div>
              </TableHead>
              <TableHead className="cursor-pointer text-right" onClick={() => handleSort('amount')}>
                Amount
              </TableHead>
              <TableHead>Recurring</TableHead>
              <TableHead className="w-[50px]" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted">
                  No transactions found
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((transaction) => {
                return (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <Checkbox />{' '}
                    </TableCell>
                    <TableCell>{format(new Date(transaction.date), 'PP')}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell className="capitalize">
                      <span
                        style={{ background: categoryColors[transaction.category] }}
                        className="px-2 py-1 rounded text-white text-sm"
                      >
                        {transaction.category}
                      </span>
                    </TableCell>
                    <TableCell
                      className="text-right"
                      style={{ color: transaction.type === 'INCOME' ? 'green' : 'red' }}
                    >
                      {transaction.type === 'INCOME' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </TableCell>
                    <TableCell>
                      {transaction.isRecurring ? (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Badge
                                variant="outline"
                                className="gap-1 px-2 py-1 bg-purple-400 text-white hover:bg-purple-600"
                              >
                                <RefreshCw className="w-4 h-4" />
                                {RECURRING_INTERVALS[transaction.recurringInterval]}
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <div>
                                Next Date:{' '}
                                <span>{format(new Date(transaction.nextRecurringDate), 'PP')}</span>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      ) : (
                        <Badge variant="outline" className="gap-1 px-2 py-1">
                          <Clock className="w-4 h-4" />
                          One-time
                        </Badge>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            )}
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TransactionTable;
