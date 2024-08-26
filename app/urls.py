from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('empresas', views.empresas, name="empresas"),
    path('catalogos', views.catalogos, name="catalogos"),
    path('agierre', views.agierre, name='agierre'),
    path('ballestra', views.ballestra, name='ballestra'),
    path('bft', views.bft, name='bft'),
    path('bhdt', views.bhdt, name='bhdt'),
    path('breitenfeldsteel', views.breitenfeldsteel, name='breitenfeldsteel'),
    path('conthermo', views.conthermo, name="conthermo"),
    path('christofgroup', views.christofgroup, name="christofgroup"),
    path('fundicaomorandini', views.fundicaomorandini, name="fundicaomorandini"),
    path('gigkarasek', views.gigkarasek, name="gigkarasek"),
    path('gmp', views.gmp, name="gmp"),
    path('lordsteel', views.lordsteel, name="lordsteel"),
    path('maronsteel', views.maronsteel, name="maronsteel"),
    path('raumaster', views.raumaster, name="raumaster"),
    path('schlick', views.schlick, name="schlick"),
    path('schmidtclemens', views.schmidtclemens, name="schmidtclemens"),
    path('siepmannwerke', views.siepmannwerke, name="siepmannwerke"),
    path('termomeccanica', views.termomeccanica, name="termomeccanica"),
    path('vana', views.vana, name="vana"),

]