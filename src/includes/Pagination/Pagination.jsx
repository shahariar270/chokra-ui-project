import React, { useState } from 'react';

const Pagination = () => {
    const dummyData = [
        { id: 1, name: 'Shahariar Islam', email: 'shahariar@example.com' },
        { id: 2, name: 'Jhon Doe', email: 'john@example.com' },
        { id: 3, name: 'Raihan Hossain', email: 'raihan@example.com' },
        { id: 4, name: 'Liza Akter', email: 'liza@example.com' },
        { id: 5, name: 'Samiul Alam', email: 'samiul@example.com' },
        { id: 6, name: 'Maria Khan', email: 'maria@example.com' },
        { id: 7, name: 'Nayeem Rahman', email: 'nayeem@example.com' },
        { id: 8, name: 'Arman Hossain', email: 'arman@example.com' },
        { id: 9, name: 'Fahim Reza', email: 'fahim@example.com' },
        { id: 10, name: 'Rifat Karim', email: 'rifat@example.com' },
        { id: 11, name: 'Tonmoy Hasan', email: 'tonmoy@example.com' },
        { id: 12, name: 'Sadia Rahman', email: 'sadia@example.com' },
        { id: 13, name: 'Mim Sultana', email: 'mim@example.com' },
        { id: 14, name: 'Rakibul Islam', email: 'rakibul@example.com' },
        { id: 15, name: 'Nusrat Jahan', email: 'nusrat@example.com' },
    ];

    const [current, setCurrent] = useState(1);
    const perPage = 5;

    const totalData = dummyData.length;
    const totalPages = Math.ceil(totalData / perPage);
    const index = (current - 1) * perPage;
    const currentData = dummyData.slice(index, index + perPage);

    const goToPage = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrent(page);
    };

    return (
        <div style={{ maxWidth: '700px', margin: '20px auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f2f2f2' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr key={item.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button onClick={() => goToPage(current - 1)} disabled={current === 1}>
                    Prev
                </button>

                <span>
                    Page <strong>{current}</strong> of <strong>{totalPages}</strong>
                </span>

                <button onClick={() => goToPage(current + 1)} disabled={current === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
