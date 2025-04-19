const UserData = require('../models/UserData');

const LuckyDraw = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'User ID required' });
    }

    try {
        const user = await UserData.findById(id);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }


        if (user.luckyDraw === true && user.luckyDrawMonth === new Date().toLocaleString('default', { month: 'long' })) {
            return res.status(400).json({ error: 'You have already participated in the lucky draw' });
        }

        let ticket;
        let isUnique = false;

        while (!isUnique) {
            ticket = Math.floor(10000 + Math.random() * 90000);
            const existing = await UserData.findOne({ luckyDrawTicket: ticket });
            if (!existing) {
                isUnique = true;
            }
        }


        user.luckyDraw = true;
        user.luckyDrawTicket = ticket;
        user.luckyDrawMonth = new Date().toLocaleString('default', { month: 'long' });
        await user.save();

        res.status(200).json({
            success: true,
            luckyDrawTicket: ticket,
            message: 'Lucky draw participation successful',
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to participate in lucky draw' });
    }
}

module.exports = LuckyDraw;
