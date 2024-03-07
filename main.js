function selectPlan(plan) {
    const plans = document.querySelectorAll('.plan');
    
    plans.forEach((planElement) => {
        planElement.classList.remove('selected');
    });

    const selectedPlan = document.querySelector(`[data-plan="${plan}"]`);
    selectedPlan.classList.add('selected');
}
