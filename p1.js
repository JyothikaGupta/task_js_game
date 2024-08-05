const invoices = [
    { company: 'Company A', date: '2024-08-01', amount: 150 },
    { company: 'Company B', date: '2024-08-15', amount: 200 },
    { company: 'Company A', date: '2024-08-20', amount: 100 }
  ];
  

  const calculateTotalAmountForMonth = (month, invoices) => {
    
    const filteredInvoices = invoices.filter(invoice => {
      const invoiceMonth = new Date(invoice.date).getMonth() + 1; // Months are 0-based
      return invoiceMonth === month;
    });
  
    const totalAmount = filteredInvoices.reduce((total, { amount }) => total + amount, 0);
  
    return totalAmount;
  };
  
  const month = 8;
  const totalAmount = calculateTotalAmountForMonth(month, invoices);
  
  console.log(`Total amount for month ${month}: $${totalAmount}`);
  