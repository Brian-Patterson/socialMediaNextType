
function CurrentDate(): any {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    
    let today = new Date()
    today.toString()
    today.toDateString()
    let dd = String(today.getDate()).padStart(2, '0')
    let mm = monthNames[today.getMonth()]
    let yyyy = today.getFullYear();
    let currentDate = mm + ' ' + dd + ', ' + yyyy

return (
    <p className='content-date'>{currentDate}</p>
)
}

export default CurrentDate