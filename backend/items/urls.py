from django.urls import path
from .views import ItemListCreateView, ItemDeleteView

urlpatterns = [
    path('items/', ItemListCreateView.as_view(), name='item-list-create'),
    path('items/<int:pk>/', ItemDeleteView.as_view(), name='item-delete'),
]
