# ggcatering

## database structure

```
{
  menus: {
    [id]: { name, price },
    [id]: { name, price },
  },
  seasons: {
    [id]: {
        metadata: { startsIn, endsIn },
        subscriptions: [ user, user ]
    }
  },
  users: {
    [id]: { name, email }
  },
  transactions: {
    [id]: { 
        message, 
        remarks, 
        amount, 
        transactionBy{user}, 
        acceptedBy{user},
        accepted
    }
  }
}
```