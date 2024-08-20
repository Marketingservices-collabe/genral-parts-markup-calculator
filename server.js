const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/calculate-markup', (req, res) => {
    const { costPrice, profitPercentage } = req.body;
    if (costPrice >= 0 && profitPercentage >= 0) {
        const markupAmount = costPrice * (profitPercentage / 100);
        const sellingPrice = costPrice + markupAmount;
        res.json({
            markupAmount: markupAmount.toFixed(2),
            sellingPrice: sellingPrice.toFixed(2)
        });
    } else {
        res.status(400).json({ error: 'Cost Price and Profit Percentage must be non-negative' });
    }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Markup Calculator API is running on port ${PORT}`);
});
