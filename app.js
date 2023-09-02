
const second_step = document.querySelector('.content-second');
const first_step = document.querySelector('.content-first');
const third_step = document.querySelector('.content-third');
const fourth_step = document.querySelector('.content-fourth');
const fifth_step = document.querySelector('.content-fifth');
const first_index = document.querySelector('.first-index');
const second_index = document.querySelector('.second-index');
const third_index = document.querySelector('.third-index');
const fourth_index = document.querySelector('.fourth-index');
const second_back = document.querySelector('.back-second');
const third_back = document.querySelector('.back-third');
const fourth_back = document.querySelector('.back-fourth');
const first_button = document.querySelector('.next-step-first');
const second_button = document.querySelector('.next-step-second');
const third_button = document.querySelector('.next-step-third');
const fourth_button = document.querySelector('.next-step-fourth');
fifth_step.style.display = 'none';
// function displaysecond(){
//     // console.log(first_step);
//     first_step.style.display = 'none';
//     second_step.style.display = 'flex';
//     first_index.style.backgroundColor = 'transparent';
//     first_index.style.color = 'white';
//     second_index.style.backgroundColor = '#BEE1FC';
//     second_index.style.color = 'black';
// }
// first_button.addEventListener('click', displaysecond);
let plan = {
    plan_name: '',
    plan_time: '',
    plan_rate: '',
    plan_total_rate: 0,
    plan_addons: []
}
function displaythird(){
    const plan_cards = document.querySelector('.content-second-contents-options');
    let f= false;
    // console.log(plan);
    for(const plan_card of plan_cards.children){
        // console.log(plan_card.style.backgroundColor);
        if(plan_card.style.backgroundColor.split(' ').join('') == 'rgb(238,245,255)'){
            f = true;
            // console.log(plan_card);
            for(const plan_detail of plan_card.children){
                // console.log(plan_detail);
                if(plan_detail.getAttribute('class') == 'options-header'){
                    // console.log(plan_detail.textContent);
                    plan.plan_name = plan_detail.textContent;
                }
                const input = document.getElementById('plan-time');
                // console.log(input.checked);
                if(input.checked){
                    plan.plan_time = 'Yearly';
                    if(plan_detail.getAttribute('class') == 'options-year-rate'){
                        plan.plan_rate = plan_detail.textContent;
                    }
                }
                else{
                    plan.plan_time = 'Monthly';
                    if(plan_detail.getAttribute('class') == 'options-month-rate'){
                        plan.plan_rate = plan_detail.textContent;
                    }
                }
            }
            break;
        }
    }  
    const plan_message = document.querySelector('.plan_message');
    if(f){
        console.log(plan);
        // plan_message.style.display = 'none';
        second_step.style.display = 'none';
        third_step.style.display = 'flex';
        second_index.style.backgroundColor = 'transparent';
        second_index.style.color = 'white';
        third_index.style.backgroundColor = '#BEE1FC';
        third_index.style.color = 'black';
        const price_monthly = document.querySelectorAll('.price-monthly');
        const price_yearly = document.querySelectorAll('.price-yearly');
        if(plan.plan_time == 'Yearly'){
            // console.log(price_yearly);
            for(const price_month of price_monthly){
                price_month.style.display = 'none';
            }
            for(const price_year of price_yearly){
                price_year.style.display = 'flex';
            }
        }
        else{
            for(const price_month of price_monthly){
                price_month.style.display = 'flex';
            }
            for(const price_year of price_yearly){
                price_year.style.display = 'none';
            }
            // price_monthly.style.display = 'flex';
            // price_yearly.style.display = 'none';
            // console.log(price_monthly);
        }
    }
    else{
        plan_message.style.display = 'flex';
    }
}
second_button.addEventListener('click', displaythird);
function displayfourth(event){
    // console.log(e.target.parentElement.parentElement.parentElement);
    const addon_headers = event.target.parentElement.parentElement.parentElement.querySelectorAll('.content-contents-first-text-first');
    const addon_month_rates = event.target.parentElement.parentElement.parentElement.querySelectorAll('.price-monthly');
    const addon_year_rates = event.target.parentElement.parentElement.parentElement.querySelectorAll('.price-yearly');
    // console.log(addon_headers);
    // console.log(addon_month_rates);
    // console.log(addon_year_rates);
    for(let item = 0; item < addon_headers.length; item++){
        // console.log(addon_headers[item]);
        // console.log(addon_month_rates[item]);
        // console.log(addon_year_rates[item]);
        const element = addon_headers[item].parentElement.previousElementSibling.querySelector('.addons-checkbox');
        // console.log(element.checked);
        if(element.checked){
            const addon_detail = {
                addon_name: addon_headers[item].textContent,
                addon_rate: plan.plan_time == 'Monthly' ? addon_month_rates[item].textContent : addon_year_rates[item].textContent
            }
            plan.plan_addons.push(addon_detail);
        }
    }
    // console.log(e.target.parentElement.querySelector('.content-contents-first-text-first'));
    // const addon_detail = {
    //     addon_name: addon_header,
    //     addon_rate: plan.plan_time == 'Monthly' ? addon_month_rate : addon_year_rate
    // }
    // plan.plan_addons.push(addon_detail);
    // console.log(plan);
    const final_plan_header = document.querySelector('.final-plan-header');
    const final_plan_time = document.querySelector('.final-plan-time');
    const final_plan_rate = document.querySelector('.final-plan-rate')
    const total_monthly = document.querySelector('.total-monthly');
    const total_yearly = document.querySelector('.total-yearly');
    const total_price = document.querySelector('.total-price');
    // console.log(total_price);
    final_plan_header.textContent = plan.plan_name;
    final_plan_time.textContent = '(' + plan.plan_time +')';
    final_plan_rate.textContent = plan.plan_rate;
    // console.log(plan.plan_rate.slice(1,-3))
    plan.plan_total_rate = plan.plan_rate.slice(1,-3);
    if(plan.plan_time == 'Monthly'){
        total_monthly.style.display = 'flex';
        total_yearly.style.display = 'none';
    }
    else{
        total_monthly.style.display = 'none';
        total_yearly.style.display = 'flex';
    }
    // total_price.textContent = plan.plan_rate;
    const final_addons = document.querySelector('.final-plan-addons-container');
    // for(const child of final_addons.children){
    //     console.log('inside final_addons.children loop');
    //     child.remove();
    //     console.log(final_addons);
    // }
    for(const addon in plan.plan_addons){
        const plan_addon_container = document.createElement('div');
        plan_addon_container.setAttribute('class', 'plan_addon_container');
        plan_addon_container.setAttribute('id', `${addon}`);
        const plan_addon_name = document.createElement('div');
        plan_addon_name.setAttribute('class', 'plan_addon_name');
        plan_addon_name.textContent = plan.plan_addons[addon].addon_name;
        const plan_addon_rate_container = document.createElement('div');
        plan_addon_rate_container.setAttribute('class', 'plan_addon_rate_container');
        const plan_addon_rate = document.createElement('div');
        plan_addon_rate.setAttribute('class', 'plan_addon_rate');
        plan_addon_rate.textContent = plan.plan_addons[addon].addon_rate;
        plan_addon_rate_container.append(plan_addon_rate);
        plan_addon_container.append(plan_addon_name);
        plan_addon_container.append(plan_addon_rate_container);
        final_addons.append(plan_addon_container);
        // console.log(addon.addon_rate.slice(2,-3));
        plan.plan_total_rate = parseInt(plan.plan_total_rate) + parseInt(plan.plan_addons[addon].addon_rate.slice(2,-3));
    }
    // console.log(plan.plan_total_rate);
    // console.log(plan.plan_addons);
    // console.log(final_addons);

    total_price.textContent = `+$${plan.plan_total_rate}${plan.plan_rate.slice(plan.plan_rate.length-3)}`;
    third_step.style.display = 'none';
    fourth_step.style.display = 'flex';
    third_index.style.backgroundColor = 'transparent';
    third_index.style.color = 'white';
    fourth_index.style.backgroundColor = '#BEE1FC';
    fourth_index.style.color = 'black';
}
third_button.addEventListener('click', displayfourth);
function gobacktofirst(){
    second_step.style.display = 'none';
    first_step.style.display = 'flex';
    second_index.style.backgroundColor = 'transparent';
    second_index.style.color = 'white';
    first_index.style.backgroundColor = '#BEE1FC';
    first_index.style.color = 'black';
}
second_back.addEventListener('click', gobacktofirst);

function gobacktosecond(){
    third_step.style.display = 'none';
    fourth_step.style.display = 'none';
    plan.plan_addons = [];
    const final_addons = document.querySelector('.final-plan-addons-container');
    while(final_addons.firstChild){
        final_addons.firstChild.remove();
    }
    // console.log(final_addons);
    second_step.style.display = 'flex';
    third_index.style.backgroundColor = 'transparent';
    third_index.style.color = 'white';
    second_index.style.backgroundColor = '#BEE1FC';
    second_index.style.color = 'black';
}
third_back.addEventListener('click', gobacktosecond);

function gobacktothird(){
    const final_addons = document.getElementsByClassName('final-plan-addons-container')[0];
    // console.log(final_addons);
    // console.log(final_addons.children);
    // const final_addons_children = final_addons.children;
    while(final_addons.firstChild){
        final_addons.firstChild.remove();
    }
    plan.plan_addons=[]
    fourth_step.style.display = 'none';
    third_step.style.display = 'flex';
    fourth_index.style.backgroundColor = 'transparent';
    fourth_index.style.color = 'white';
    third_index.style.backgroundColor = '#BEE1FC';
    third_index.style.color = 'black';
}
fourth_back.addEventListener('click', gobacktothird);

function displayfifth(){
    fifth_step.style.display = 'flex';
    fourth_step.style.display = 'none';
}
fourth_button.addEventListener('click', displayfifth);
 
const plans = document.querySelector('.content-second-contents-options-elements');
// plans.addEventListener('click',  )
// second_button.addEventListener('click', displaythird);
const form = document.querySelector('.personal_details');
function validateDetails(event){
    event.preventDefault();
    // console.log('clicked');
    // alert('form is going to be validated');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone_number');
    const name_message = document.getElementById('name_message');
    const email_message = document.getElementById('email_message');
    const phone_message = document.getElementById('phone_message');
    if(name.value.length == 0 || email.value.length == 0 || phone.value.length == 0){
        if(name.value.length == 0){
            name_message.style.display = 'flex';
            name.style.borderColor = 'red';
        }
        if(email.value.length == 0){
            email_message.style.display = 'flex';
            email.style.borderColor = 'red';
        }
        if(phone.value.length == 0){
            phone_message.style.display = 'flex';
            phone.style.borderColor = 'red';
        }
    }    
    else{
        first_step.style.display = 'none';
        second_step.style.display = 'flex';
        first_index.style.backgroundColor = 'transparent';
        first_index.style.color = 'white';
        second_index.style.backgroundColor = '#BEE1FC';
        second_index.style.color = 'black';
    }
}
form.addEventListener('submit', validateDetails);
const plan_cards = document.querySelector('.content-second-contents-options');
function highlightplancard(e){
    // console.log(e.target);
    // console.log(e.target.parentElement, plan_cards);
    const element = e.target.parentElement;
    const parent = element.parentElement;
    for(const item of parent.children){
        // console.log(item);
        if(item == element){
            item.style.backgroundColor = 'rgb(238,245,255)';
            item.style.borderColor = 'hsl(243, 100%, 62%)';
            const plan_message = document.querySelector('.plan_message');
            plan_message.style.display = 'none';
        }
        else{
            item.style.backgroundColor = 'white';
            item.style.borderColor = 'rgb(221, 219, 219)';
        }
    }
}
plan_cards.addEventListener('click', highlightplancard);

// function hoverhighlight(e){
//     const element = e.target.parentElement;
//     const parent = element.parentElement;
//     for(const item of parent.children){
//         // console.log(item);
//         if(item == element){
//             // console.log(item);
//             item.style.backgroundColor = 'rgb(238,245,255)';
//             item.style.borderColor = 'hsl(243, 100%, 62%)';
//         }
//         else{
//             item.style.backgroundColor = 'white';
//             item.style.borderColor = 'rgb(221, 219, 219)';
//         }
//     }
// }
// plan_cards.addEventListener('mouse', hoverhighlight);

const plan_time = document.getElementById('plan-time');
function displayplans(e){
    // console.log(e.target.checked);
    const monthly = document.querySelector('.monthly');
    const yearly = document.querySelector('.yearly');
    const plans_month_rate = document.querySelectorAll('.options-month-rate');
    const plans_year_rate = document.querySelectorAll('.options-year-rate');
    const plans_year_offer = document.querySelectorAll('.options-year-offer');
    // console.log(plans_month_rate);
    // console.log(plans_year_rate);
    // console.log(plans_year_offer);

    if(e.target.checked){
        // console.log('checked');
        for(const month_rate of plans_month_rate){
            month_rate.style.display = 'none';
        }
        for(const year_rate of plans_year_rate){
            year_rate.style.display = 'flex';
        }
        for(const year_offer of plans_year_offer){
            year_offer.style.display = 'flex';
        }
        monthly.style.color = 'hsl(231, 11%, 63%)';
        yearly.style.color = 'hsl(213, 96%, 18%)';
    }
    else{
        // console.log('not checked');
        for(const month_rate of plans_month_rate){
            month_rate.style.display = 'flex';
        }
        for(const year_rate of plans_year_rate){
            year_rate.style.display = 'none';
        }
        for(const year_offer of plans_year_offer){
            year_offer.style.display = 'none';
        }
        // plans_month_rate.style.display = 'flex';
        // plans_year_rate.style.display = 'none';
        // plans_year_offer.style.display = 'none';
        yearly.style.color = 'hsl(231, 11%, 63%)';
        monthly.style.color = 'hsl(213, 96%, 18%)';
    }
}
plan_time.addEventListener('click', displayplans);

const checkbox = document.querySelectorAll('.addons-checkbox');
function highlightaddon(e){
    // console.log(e.target);
    const element = e.target.parentElement.parentElement.parentElement;
    if(e.target.checked){
        // console.log(e.target.parentElement.parentElement);
        element.style.backgroundColor = 'rgb(238,245,255)';
        element.style.borderColor = 'hsl(243, 100%, 62%)';
    }
    else{
        element.style.backgroundColor = 'white';
        element.style.borderColor = 'hsl(229, 24%, 87%)';

    }
}
// console.log(checkbox);
for(const check of checkbox){
    check.addEventListener('click', highlightaddon);
}
const final_plan_option = document.querySelector('.final-plan-option');
final_plan_option.addEventListener('click', gobacktosecond);