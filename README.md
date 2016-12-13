# ggcatering

## database structure

```
{
  roles: {
    [id]: { name }
  },
  menus: {
    [id]: { name, price, isVisible },
    [id]: { name, price, isVisible },
  },
  seasons: {
    [id]: {
        metadata: { startsIn, endsIn },
        subscriptions: [ [id]: true, [id]: false ],
        days: {
            [date]: {
                menus: [],
            }
        },
        isOpen,
        isVisible
    }
  },
  purchases: {
    [id]: {
        seasonId,
        requestBy,
        date,
        isVisible
    }
  },
  users: {
    [id]: { name, email, isVisible }
  },
  transactions: {
    [id]: { 
        message, 
        remarks, 
        amount, 
        transactionBy{user}, 
        acceptedBy{user},
        accepted,
        isVisible
    }
  }
}
```