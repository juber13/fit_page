
const showAllList = async (req, res) => {
    const response = await fetch('http://coding-assignment.bombayrunning.com/data.json');
    const data = await response.json();
    return res.json({
        success: true,
        message: "All list Api",
        data
    })
}

const getDetails = async (req, res) => {
    const id = req.params.id;

    try {

        const response = await fetch('http://coding-assignment.bombayrunning.com/data.json');
        const data = await response.json();
        const result = data.find((item) => item.id === Number(id));
        console.log(result)

        return res.json({
            success: true,
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = { showAllList, getDetails };