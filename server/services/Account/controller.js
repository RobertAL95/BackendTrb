const Account = require('./model');

// Crear una nueva cuenta para un usuario
const createAccount = async (req, res) => {
  try {
    const { userId } = req.body;
    const accountNumber = generateAccountNumber();
    const newAccount = new Account({
      userId,
      accountNumber,
      balance: 0, // Balance inicial por defecto
    });

    await newAccount.save();
    res.status(201).json({
      message: 'Account created successfully',
      account: newAccount,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener la cuenta de un usuario
const getAccount = async (req, res) => {
  try {
    const { userId } = req.params;
    const account = await Account.findOne({ userId });

    if (!account) {
      return res.status(404).json({ error: 'Account not found' });
    }

    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Generar un número de cuenta único
const generateAccountNumber = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString(); // 10 dígitos
};

module.exports = { createAccount, getAccount };
