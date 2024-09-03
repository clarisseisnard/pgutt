from django.shortcuts import render
from .models import Info

# Create your views here.

def index(request):
    return render(request, 'app/index.html')

def empresas(request):
    return render(request, 'app/empresas.html')

def catalogos(request):
    if request.method == "POST":
        nome = request.POST.get("nome")
        email = request.POST.get("email")
        celular = request.POST.get("celular")
        empresa = request.POST.get("empresa")
        produto = request.POST.get("produto")
        motivo = request.POST.get("motivo")

        update_info = Info(nome=nome, contato_email=email, contato_celular=celular, empresa=empresa, produto_de_interesse=produto, motivo=motivo)
        update_info.save()
        return render(request, "app/index.html")
    if request.method == "GET":
        return render(request, "app/catalogos.html")

def agierre(request):
    return render(request, 'app/empresa/agierre.html')

def ballestra(request):
    return render(request, 'app/empresa/ballestra.html')

def bft(request):
    return render(request, 'app/empresa/bft.html')

def bhdt(request):
    return render(request, 'app/empresa/bhdt.html')

def breitenfeldsteel(request):
    return render(request, 'app/empresa/BREITENFELDSTEEL.html')

def conthermo(request):
    return render(request, 'app/empresa/CONTHERMO.html')

def christofgroup(request):
    return render(request, 'app/empresa/christofgroup.html')

def fundicaomorandini(request):
    return render(request, 'app/empresa/fundicaomorandini.html')

def gigkarasek(request):
    return render(request, 'app/empresa/GIGKARASEK.html')

def gmp(request):
    return render(request, 'app/empresa/GMP.html')

def lordsteel(request):
    return render(request, 'app/empresa/LORDSTEEL.html')

def maronsteel(request):
    return render(request, 'app/empresa/MARONSTEEL.html')

def raumasterpaper(request):
    return render(request, 'app/empresa/RAUMASTERpaper.html')

def raumasteroy(request):
    return render(request, 'app/empresa/RAUMASTERoy.html')

def schlick(request):
    return render(request, 'app/empresa/SCHLICK.html')

def schmidtclemens(request):
    return render(request, 'app/empresa/SCHMIDTCLEMENS.html')

def siepmannwerke(request):
    return render(request, 'app/empresa/SIEPMANNWERKE.html')

def termomeccanica(request):
    return render(request, 'app/empresa/termomeccanica.html')

def vana(request):
    return render(request, 'app/empresa/vana.html')
