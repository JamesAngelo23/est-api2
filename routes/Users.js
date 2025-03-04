router.post("/add", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});

router.put("/update/:id", async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});

router.delete("/delete/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
});