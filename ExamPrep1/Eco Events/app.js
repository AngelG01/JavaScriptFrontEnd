window.addEventListener("load", solve);

function solve() {
    let nextBtn = document.getElementById('next-btn');
    let previewList = document.getElementById('preview-list');
    let emailInput = document.getElementById('email');
    let eventInput = document.getElementById('event');
    let locationInput = document.getElementById('location');
    let eventList = document.getElementById('event-list'); // Get the approved events list

    nextBtn.addEventListener('click', () => {
        let email = emailInput.value.trim();
        let eventName = eventInput.value.trim();
        let location = locationInput.value.trim();

        if (email !== '' && eventName !== '' && location !== '') {
            let previewItem = document.createElement('li');
            previewItem.classList.add('application');
            previewItem.innerHTML = `
                <article>
                    <h4>${email}</h4>
                    <p><strong>Event:</strong><br>${eventName}</p>
                    <p><strong>Location:</strong><br>${location}</p>
                </article>
                <button class="action-btn edit">edit</button>
                <button class="action-btn apply">apply</button>
            `;
            previewList.appendChild(previewItem);

            nextBtn.disabled = true;
            emailInput.value = '';
            eventInput.value = '';
            locationInput.value = '';

            let editBtn = previewItem.querySelector('.action-btn.edit');
            let applyBtn = previewItem.querySelector('.action-btn.apply');

            editBtn.addEventListener('click', () => {
                emailInput.value = email;
                eventInput.value = eventName;
                locationInput.value = location;
                previewList.removeChild(previewItem);
                nextBtn.disabled = false;
            });

            applyBtn.addEventListener('click', () => {
                let approvedEventItem = document.createElement('li');
                approvedEventItem.innerHTML = `
                    <article>
                        <h4>${email}</h4>
                        <p><strong>Event:</strong><br>${eventName}</p>
                        <p><strong>Location:</strong><br>${location}</p>
                    </article>
                `;
                eventList.appendChild(approvedEventItem);
                previewList.removeChild(previewItem);
                nextBtn.disabled = false;
            });

        }
    });
}
