import React from 'react'

const Content = ({namaPengguna,statusPekerjaan}) =>{
    return(
        <div>
            <h4>Selamat Datang {namaPengguna}, status anda sekarang {statusPekerjaan}</h4>
        </div>
    )
}
export default Content