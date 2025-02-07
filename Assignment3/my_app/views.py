from django.shortcuts import render
from django.http import JsonResponse

# View to render the greet.html page when the user accesses the homepage
def default_greet(request):
    return render(request, 'greet.html')

# View to handle AJAX requests and return a greeting message in JSON format
def greet(request):
    # Get the 'name' parameter from the request
    name = request.GET.get('name')

    # If no name is provided, default to "stranger"
    if not name:
        name = "stranger"

    # Return a JSON response with the greeting message
    return JsonResponse({"greeting": f"Hello {name}"})
