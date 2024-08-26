import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

{
  /*
export function RecentSales() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Olivia Martin</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Jackson Lee</p>
          <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
          <p className="text-sm text-muted-foreground">
            isabella.nguyen@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$299.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">William Kim</p>
          <p className="text-sm text-muted-foreground">will@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$99.00</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Sofia Davis</p>
          <p className="text-sm text-muted-foreground">sofia.davis@email.com</p>
        </div>
        <div className="ml-auto font-medium">+$39.00</div>
      </div>
    </div>
  );
}
*/
}

export function RecentSales() {
  const transactions = [
    {
      name: 'Olivia Martin',
      avatar: '/avatars/01.png',
      initials: 'OM',
      transactionType: 'BUY',
      amount: '+ HK$ 19,980.00'
    },
    {
      name: 'Jackson Lee',
      avatar: '/avatars/02.png',
      initials: 'JL',
      transactionType: 'SELL',
      amount: '- HK$ 39,500.00'
    },
    {
      name: 'Isabella Nguyen',
      avatar: '/avatars/03.png',
      initials: 'IN',
      transactionType: 'DIVIDEND',
      amount: '+ HK$ 299.00'
    },
    {
      name: 'William Kim',
      avatar: '/avatars/04.png',
      initials: 'WK',
      transactionType: 'BUY',
      amount: '+ HK$ 85,000.00'
    },
    {
      name: 'Sofia Davis',
      avatar: '/avatars/05.png',
      initials: 'SD',
      transactionType: 'SELL',
      amount: '- HK$ 5,900.00'
    }
  ];

  return (
    <div className="space-y-8">
      {transactions.map((transaction, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={transaction.avatar} alt="Avatar" />
            <AvatarFallback>{transaction.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              {transaction.name}
            </p>
            {/* <p className="text-sm text-muted-foreground">{transaction.transactionType}</p> */}
            <span
              className={`inline-block rounded-full px-2 py-0.5 text-xs text-white ${
                transaction.transactionType === 'BUY'
                  ? 'bg-blue-500'
                  : transaction.transactionType === 'SELL'
                  ? 'bg-red-500'
                  : 'bg-green-500'
              }`}
            >
              {transaction.transactionType}
            </span>
          </div>
          <div className="ml-auto font-medium">{transaction.amount}</div>
        </div>
      ))}
    </div>
  );
}
