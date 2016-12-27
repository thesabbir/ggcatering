# ggcatering

## database structure

```
{
  roles: {
    [id]: { name }
  },  
  teams: {
    [id]: { name }
  },
  menus: {
    [id]: { name, price },
    [id]: { name, price },
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
        isOpen
    }
  },
  users: {
    [id]: { name, email }
  },
  orders: {
    [id]: {
        date,
        seasonId,
        requestBy,
        isVisible,
        createdAt,
        updatedAt,
        createdBy,
        updatedBy
    }
  },
  otherExpenses: {
    [id]: {
        date{date},
        amount{number},
        seasonId,
        reference{text},
        createdAt{date},
        updatedAt{date},
        createdBy{user},
        updatedBy{user}
    }
  },
  payments: {
    [id]: { 
        amount{number}, 
        reference{text}, 
        comment{text}, 
        transactionBy{user}, 
        acceptedBy{user},
        accepted{boolean},
        createdAt{date},
        updatedAt{date},
        createdBy{user},
        updatedBy{user}
    }
  }
}
```